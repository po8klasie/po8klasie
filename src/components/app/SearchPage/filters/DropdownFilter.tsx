import { FC, Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { MdCheck, MdExpandMore } from 'react-icons/md';

interface DropdownChoice {
  value: string;
  label: string;
}

interface DropdownFilterOptions {
  title: string;
  choices: DropdownChoice[];
  isMultipleChoice?: boolean;
}

interface DropdownFilterProps {
  options: DropdownFilterOptions;
  value: unknown;
  onChange: (values: unknown[]) => void;
}

const DropdownFilter: FC<DropdownFilterProps> = ({ onChange, options: { title, choices } }) => {
  const [selected, setSelected] = useState();

  return (
    <div className="mx-2 top-16">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full py-2 pl-4 pr-10 text-left bg-white rounded-full shadow-md border border-light cursor-default md:text-base">
            <span className="block truncate">{title}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <MdExpandMore className="w-5 h-5" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {choices.map((choice: DropdownChoice) => (
                <Listbox.Option
                  key={choice.value}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? 'text-primaryLight bg-primary' : 'text-gray-900'
                    }`
                  }
                  value={choice.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {choice.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <MdCheck className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default DropdownFilter;
