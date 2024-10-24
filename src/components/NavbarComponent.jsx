import { Navbar, NavbarBrand, Link } from "@nextui-org/react";

export default function NavbarComponent({ boldFirst, regularMiddle, boldLast, regularLast, textColor = "000" }) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Navbar className="flex justify-start">
      <NavbarBrand>
        <Link color="foreground" href="#" onClick={scrollTop}>
          <p className="ml-10 mt-5 font-bold text-2xl" style={{ color: textColor }}>
            <span className="font-bold">{boldFirst}</span>
            <span className="font-normal">{regularMiddle}</span>
            <span className="font-bold">{boldLast}</span>
            <span className="font-normal">{regularLast}</span>
          </p>
        </Link>
      </NavbarBrand>
    </Navbar>
  );
}
