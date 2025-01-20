import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { baseURL } from "../API";
import { Button } from "@/components/ui/button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductCard({ data }) {
  return (
    <Card className="w-max h-min ">
      <CardHeader>
        <CardTitle>{data?.name}</CardTitle>
        <img
          src={`${baseURL}${data?.img}`}
          alt=""
          className="w-[150px] h-[150px] border border-black p-1"
        />
        <CardDescription>{data?.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <p>{data?.price}</p>
        <EditIcon className="ml-auto" />
        <DeleteIcon className="ml-auto" />
      </CardFooter>
    </Card>
  );
}
