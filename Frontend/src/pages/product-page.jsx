import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "../components/product-card";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { getProductAPI, postProductAPI } from "../API/productAPI";

export default function ProductPage() {
  const [open, setOpen] = useState(false);
  const productNameRef = useRef(null);
  const productImgRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const productPriceRef = useRef(null);

  const queryClient = useQueryClient();

  const { data: products } = useQuery({
    queryFn: getProductAPI,
    queryKey: ["products"],
  });

  console.log(products);

  const addProductMutation = useMutation({
    mutationFn: postProductAPI,
    onSuccess: (data) => {
      console.log(data);
      setOpen(false);
      queryClient.invalidateQueries(["products"]);
    },
  });

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", productNameRef.current.value);
    formData.append("description", productDescriptionRef.current.value);
    formData.append("price", productPriceRef.current.value);
    formData.append("img", productImgRef.current.files[0]);
    console.log("submit btn", formData);
    addProductMutation.mutate(formData);
  };

  return (
    <main className="flex-1 min-h-0 p-5 flex flex-col gap-3 bg-blue-100">
      <div>
        <Button onClick={() => setOpen(true)}>Add Products</Button>
      </div>
      <section className="flex-1 min-h-0 flex gap-3 flex-wrap rounded-lg shadow-xl p-6">
        {products?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
            <DialogDescription>
              <div className="flex gap-4 flex-col">
                <Input
                  type="text"
                  placeholder="Product Name"
                  ref={productNameRef}
                />
                <Input type="file" placeholder="img" ref={productImgRef} />
                <Input
                  type="text"
                  placeholder="Product Description"
                  ref={productDescriptionRef}
                />
                <Input
                  type="text"
                  placeholder="Product Price"
                  ref={productPriceRef}
                />
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}
