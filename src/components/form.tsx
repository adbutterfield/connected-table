import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from "react-router-dom";

const schema = z.object({
  limit: z.string().min(1),
  page: z.string().min(1),
});

type SearchParams = z.infer<typeof schema>;

const Form: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      limit: searchParams.get("limit") || "20",
      page:
        String(
          Number(searchParams.get("offset")) / Number(searchParams.get("limit"))
        ) || "1",
    },
  });

  const onSubmit: SubmitHandler<SearchParams> = (data) => {
    console.log("here!!!");
    setSearchParams({
      limit: data.limit,
      offset: String((Number(data.page) - 1) * Number(data.limit)),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label block">Limit</label>
      <input className="form-input px-3 py-2" {...register("limit")} />
      <br />
      <label className="form-label block mt-4">Page</label>
      <input className="form-input px-3 py-2" {...register("page")} />
      <button
        className="rounded block mt-4 border border-current px-3 py-2"
        type="submit"
      >
        Submit
      </button>
      <p>{errors.limit?.message}</p>
      <p>{errors.page?.message}</p>
      <p>{errors.root?.message}</p>
    </form>
  );
};

export default Form;
