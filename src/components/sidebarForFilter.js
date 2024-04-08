import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import Button from "@/components/CustomButtons/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { Filter } from "@material-ui/icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ children, brands, onSubmit }) {
  const [rangePrices, updateRangePrices] = useState({});
  const [selectedBrands, setSelectedBrands] = useState([]);

  const sortOptions = [
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters([
      {
        id: "price-range",
        name: "Khoảng Giá",
        options: [
          { value: [0, 2000000], label: "Dưới 2 triệu", checked: false },
          {
            value: [2000000, 5000000],
            label: "Từ 2 triệu đến 5 triệu",
            checked: false,
          },
          {
            value: [5000000, 10000000],
            label: "Từ 5 triệu đến 10 triệu",
            checked: false,
          },
          {
            value: [10000000, "infinity"],
            label: "Trên 10 triệu",
            checked: false,
          },
        ],
      },
      {
        id: "Brand",
        name: "Thương Hiệu",
        options: [
          ...brands.map((item) => {
            return {
              value: item.key,
              label: item.label,
              checked: false,
            };
          }),
        ],
      },
    ]);
  }, [brands]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      rangePrices,
      selectedBrands,
    });
  };

  const handleRangePricesChange = (e) => {
    // const { value } = e.target;
    // const [min, max] = value.split("-");
    // updateRangePrices([min, max]);
    const min = e.target.value.split(",")[0];
    const max = e.target.value.split(",")[1];

    if (max === "infinity") {
      updateRangePrices({
        min: Number(min),
        max: max,
      });
      return;
    }

    updateRangePrices({
      // change to number
      min: Number(min),
      max: Number(max),
    });
  };

  const handleClickBrand = (e) => {
    const { value } = e.target;
    console.log(value);
    if (e.target.checked) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    console.log(rangePrices);
  }, [rangePrices]);

  useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands]);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg text-gray-900">BỘ LỌC TÌM KIẾM</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h4 className="font-bold ml-2 flex gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                          />
                        </svg>
                      </span>
                      BỘ LỌC TÌM KIẾM
                    </h4>
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="ml-2 space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type={
                                        section.id === "price-range"
                                          ? "radio"
                                          : "checkbox"
                                      }
                                      onChange={(e) => {
                                        if (section.id === "price-range") {
                                          handleRangePricesChange(e);
                                        } else {
                                          handleClickBrand(e);
                                        }
                                      }}
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 p-2 rounded border-gray-500 border-2 border-solid text-indigo-600 focus:ring-indigo-500"
                                      onClick={() => {
                                        const newFilters = filters.map(
                                          (filter) => {
                                            if (filter.id === section.id) {
                                              return {
                                                ...filter,
                                                options: filter.options.map(
                                                  (opt) => {
                                                    if (
                                                      opt.value === option.value
                                                    ) {
                                                      return {
                                                        ...opt,
                                                        checked: !opt.checked,
                                                      };
                                                    }
                                                    return opt;
                                                  },
                                                ),
                                              };
                                            }
                                            return filter;
                                          },
                                        );
                                        setFilters(newFilters);
                                      }}
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                    <div className="text-center">
                      <Button
                        color="twitter"
                        type="submit"
                        onClick={(e) => {
                          handleSubmit(e);
                        }}
                      >
                        <span
                          className="
                          font-bold
                          "
                        >
                          ÁP DỤNG
                        </span>
                      </Button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="mx-auto max-w- px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-right">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sắp xếp
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm",
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <div
                className="-m-2 ml-4 p-2 hover:text-gray-900 sm:ml-6 lg:hidden flex cursor-pointer"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <div>Lọc</div>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="flex gap-x-8 gap-y-10 ">
              {/* Filters */}
              <form className="hidden lg:block">
                <h2 className="text-lg font-medium text-gray-900">LỌC</h2>
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type={
                                    section.id === "price-range"
                                      ? "radio"
                                      : "checkbox"
                                  }
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 border-solid text-indigo-600 focus:ring-indigo-500"
                                  onChange={(e) => {
                                    if (section.id === "price-range") {
                                      handleRangePricesChange(e);
                                    } else {
                                      handleClickBrand(e);
                                    }
                                  }}
                                  onClick={() => {
                                    console.log(section.id);
                                    const newFilters = filters.map((filter) => {
                                      if (filter.id === section.id) {
                                        return {
                                          ...filter,
                                          options: filter.options.map((opt) => {
                                            if (opt.value === option.value) {
                                              return {
                                                ...opt,
                                                checked: !opt.checked,
                                              };
                                            }
                                            return opt;
                                          }),
                                        };
                                      }
                                      return filter;
                                    });
                                    setFilters(newFilters);
                                  }}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                <div className="mt-6">
                  <Button
                    color="twitter"
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <span
                      className="
                      font-bold
                      "
                    >
                      ÁP DỤNG
                    </span>
                  </Button>
                </div>
              </form>

              {/* Product grid */}
              <div className="grow">{children}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
