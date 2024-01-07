export default function IconHover(props) {
  return (
    <span className="relative isolate cursor-pointer before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:aspect-square before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:rounded-full before:p-4 before:duration-150 hover:before:scale-100 hover:before:bg-slate-300 dark:hover:text-black">
      {props.children}
    </span>
  );
}
