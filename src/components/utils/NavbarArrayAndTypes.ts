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
          href: "/female",
          isDropDown: false,
        },
        {
          label: "Shirts",
          href: "/female",
          isDropDown: false,
        },
        {
          label: "Pents",
          href: "/female",
          isDropDown: false,
        },
        {
          label: "Jackets",
          href: "/female",
          isDropDown: false,
        },
        {
          label: "Sweater",
          href: "/female",
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
          href: "/male",
          isDropDown: false,
        },
  
        {
          label: "Jackets",
          href: "/male",
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
  