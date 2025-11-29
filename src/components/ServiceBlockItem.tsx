export default function ServiceBlockItem({ title }: { title: string | React.ReactNode }) {
    return (
        <div className="rounded-xl bg-[#169976] px-4 py-2 text-white font-light hover:bg-[#169976ce] transition-colors min-h-20 items-center justify-center flex">
            {title}
        </div>
    )
}   