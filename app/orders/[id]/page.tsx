import NewOrder from "@/components/orders/new-order";
import Spinner from "@/components/ui/loaders/spinner/spinner";
// import PageLoader from "next/dist/client/page-loader";
// import { useRouter } from "next/router";


export default function OrderPage() {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <Spinner showText={false} />;
//   }

  return <NewOrder />;

}