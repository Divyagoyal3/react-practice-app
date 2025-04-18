import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md"
import { CiBowlNoodles } from "react-icons/ci";
import { TbSoup } from "react-icons/tb";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Categories = [
    {
        id :1,
        name : "all",
        image : <TiThSmallOutline className="w-[30px] h-[30px] text-green-500" />,
    },
    {
        id :2,
        name : "breakfast",
        image :<MdOutlineFreeBreakfast className="w-[30px] h-[30px] text-green-500" />,
    },
    {
        id :3,
        name : "soups",
        image : <TbSoup className="w-[30px] h-[30px] text-green-500" />,
    },
    {
        id :4,
        name : "pasta",
        image : <CiBowlNoodles className="w-[30px] h-[30px] text-green-500" />,
    },
    {
        id :5,
        name : "main_course",
        image : <MdOutlineFoodBank className="w-[30px] h-[30px] text-green-500" />,
    },
    {
        id :6,
        name : "pizza",
        image : <GiFullPizza className="w-[30px] h-[30px] text-green-500" />,
    },
    {
        id :7,
        name : "burger",
        image : <GiHamburger className="w-[30px] h-[30px] text-green-500" />,
    },
];


export default Categories;