import{useInView} from 'react-intersection-observer'


interface infiniteScrollContainerProps extends React.PropsWithChildren{
    onBottomReached:() => void
    className?: string
}

export default function InfiniteScrollContainer({
    children,
    onBottomReached,
    className,

}: infiniteScrollContainerProps ){
    const {ref} =useInView({
        rootMargin: '200px',
        onChange(inView){
            if(inView){
                onBottomReached()
            }}
    })
    return (
        <div className={className}>
            {children}
            <div ref={ref} />
        </div>
    )
}
