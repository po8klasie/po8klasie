import {
  arrayDeserializer,
  arraySerializer,
  basicDeserializer,
  basicSerializer,
  pageNumberDeserializer,
  pageNumberSerializer,
} from './searchSerializers';
import { FilterData } from '../data/filters';

const serializerDeserializerOverwrites: Record<string, any> = {
  page: [pageNumberSerializer, pageNumberDeserializer],
  schoolType: [arraySerializer, arrayDeserializer],
  extendedSubjects: [arraySerializer, arrayDeserializer],
  district: [arraySerializer, arrayDeserializer],
  public: [arraySerializer, arrayDeserializer],
};

const apiParamKeysOverwrites: Record<string, string> = {
  public: 'is_public',
  schoolType: 'school_type',
  extendedSubjects: 'highschoolclass__extendedsubject__name',
  district: 'address__district',
  query: 'school_name',
};

export const apiDefaultParams: Record<string, string> = {
  school_type_generalised: 'szkoła ponadpodstawowa',
  ordering: 'school_name',
};

export const serializeSearchData = (
  searchData: Record<string, any>,
  mode: any,
) => {
  const searchParams = new URLSearchParams();

  if (mode === 'api') {
    Object.entries(apiDefaultParams).forEach((entry) =>
      searchParams.set(...entry),
    );
  }

  return Object.entries(searchData)
    .reduce((p, [_key, value]) => {
      let key = _key;
      let serializer = basicSerializer;

      if (
        Object.prototype.hasOwnProperty.call(
          serializerDeserializerOverwrites,
          key,
        )
      ) {
        serializer = serializerDeserializerOverwrites[key][0];
      }

      if (
        mode === 'api' &&
        Object.prototype.hasOwnProperty.call(apiParamKeysOverwrites, key)
      ) {
        key = apiParamKeysOverwrites[key] as string;
      }

      return serializer([key, value], p, mode);
    }, searchParams)
    .toString();
};

export const deserializeSingleSearchData = (
  key: string,
  p: URLSearchParams,
) => {
  let deserializer = basicDeserializer;

  if (
    Object.prototype.hasOwnProperty.call(serializerDeserializerOverwrites, key)
  ) {
    deserializer = serializerDeserializerOverwrites[key][1];
  }
  return deserializer(key, p);
};

export const deserializeQuery = (p: URLSearchParams) =>
  deserializeSingleSearchData('query', p) ?? '';

export const deserializePage = (p: URLSearchParams) =>
  deserializeSingleSearchData('page', p) ?? 1;

export const deserializeFilters = (p: URLSearchParams, filters: FilterData[]) =>
  filters.reduce((obj: any, filter) => {
    const value = deserializeSingleSearchData(filter.key, p);
    if (!value) return obj;

    return { ...obj, [filter.key]: value };
  }, {});
