export function NoteCard() {
    return (
        <button className='rounded-md bg-slate-800 text-left p-5 space-y-6 overflow-hidden relative hover:ring-2 outline-none hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
            <span className='text-sm font-medium text-slate-300'>há 2 dias</span>
            <p className='text-sm leading-6 text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A iste quo voluptatem velit nam illo modi corporis expedita vero voluptates incidunt perspiciatis enim et est explicabo, nulla necessitatibus ullam suscipit!</p>

            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />

        </button>
    )
}