export default function Heading(props) {
  const { title } = props;

  return (
    <h1 className="text-md relative mx-auto my-3 w-fit select-none py-1 text-center uppercase tracking-tighter text-slate-700 duration-150 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-0 before:bg-orange-500 before:duration-150 after:absolute after:right-0 after:top-full after:h-0.5 after:w-0 after:bg-orange-500 after:duration-150 hover:tracking-tight hover:before:w-full hover:after:w-full md:text-3xl lg:text-4xl dark:text-slate-400">
      {title}
    </h1>
  );
}
