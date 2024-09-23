import Button from "@/components/Button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className=" mt-32 pb-40">
      <div className="card bg-slate-300 w-96 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">Page Not Found</h2>
          <p>The page you are looking for was not found.</p>
          <div className="card-actions justify-end">
            <Button className="mx-auto mt-4">
              <Link href="/">Back Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
