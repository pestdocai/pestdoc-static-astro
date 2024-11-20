import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export default function DisclaimerFloatButton() {
  return (
    <Dropdown >
      <DropdownTrigger>
        <Button variant="bordered" className="bg-[#F45751] text-white">
          Disclaimer
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        className="max-w-52"
        aria-label="Dropdown menu with icons"
      >
        <DropdownItem
          description={<ol className="list-decimal pl-5 space-y-2 text-[#6A6C73]">
              <li>The subscription must be inactive before deleting the account.</li>
              <li>Data will persist for 30 days after account deletion.</li>
              <li>You can still log in to a deleted account within 30 days of deletion.</li>
              <li>Deleting an account means removing profile data, but not transactional data, such as chat
                  history.
              </li>
          </ol>}
          key="description"
        />
      </DropdownMenu>
    </Dropdown>
  );
}
