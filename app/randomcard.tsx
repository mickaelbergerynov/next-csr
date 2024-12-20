interface IRandomCardProps {
    id: number;
    title: string;
    author: string;
    description: string;
}

export default function RandomCard(props: IRandomCardProps) {
    const { title, author, description } = props;
    return <div className="w-80 h-64 rounded border-2 p-4 hover:shadow-lg">
        <div className="flex gap-4 w-full items-center h-16">
            <div className="rounded-full h-full w-16 min-w-16 overflow-hidden flex justify-center items-center bg-slate-200">
                <p className="m-0 p-0 font-bold text-center" title={author}>{author.at(0)}</p>
            </div>
            <div>
                {title}
            </div>
        </div>
        <div className="pt-4">
            {description}
        </div>
    </div>
}