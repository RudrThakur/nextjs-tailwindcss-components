import Navbar1 from "@/components/navbar/navbar1";

export default function Navbar({ params }: { params: { number: string } }) {
    const { number } = params;
    if (number == '1') {
        return (
            <Navbar1 />
        );
    } else {
        return (
            <>
            </>
        );
    }
}