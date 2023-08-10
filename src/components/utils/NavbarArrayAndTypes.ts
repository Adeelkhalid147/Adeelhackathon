export interface NavbarItemType {
    label: string;
    href: string;
    isDropDown: boolean;
    dropDownData?: Array<NavbarItemType>;
  }
  
// navbar mai female or male ka dropdown lane k liye

  export const NavbarArray: Array<NavbarItemType> = [
    {
      label: "Female",
      href: "/female",
      isDropDown: true,
      dropDownData: [
        {
          label: "Dresses",
          href: "/female/dresse",
          isDropDown: false,
        },
        {
          label: "TShirts",
          href: "/female/t-shirt",
          isDropDown: false,
        },
        {
          label: "Pents",
          href: "/female/pent",
          isDropDown: false,
        },
        {
          label: "Jackets",
          href: "/female/jacket",
          isDropDown: false,
        },
        {
          label: "Sweater",
          href: "/female/sweater",
          isDropDown: false,
        },
      ],
    },
    {
      label: "Male",
      href: "/male/Male",
      isDropDown: true,
      dropDownData: [
        {
          label: "Sweaters",
          href: "/male/sweater",
          isDropDown: false,
        },
  
        {
          label: "Jackets",
          href: "/male/jacket",
          isDropDown: false,
        },
      ],
    },
    {
      label: "Kids",
      href: "/kid",
      isDropDown: false,
    },
    {
      label: "All Products",
      href: "/allproducts",
      isDropDown: false,
    },
  ];
  