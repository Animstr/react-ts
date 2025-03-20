import { MutableRefObject, useEffect} from "react";

interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>,
    wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({callback, triggerRef, wrapperRef}: UseInfiniteScrollProps) => {

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerRefElement = triggerRef.current;
        const wrapperRefElement = wrapperRef.current;

        if (callback) {
            const options = {
                root: wrapperRefElement,
                rootMargin: '0px',
                threshold: 1
            }
    
            observer = new IntersectionObserver(([entry]) => {
                if(entry.isIntersecting) {
                    callback()
                }
            }, options)
    
            observer.observe(triggerRefElement)
        }
        return () => {
            if(observer) {
                observer.unobserve(triggerRefElement)
            }
        }   
    }, [callback, triggerRef, wrapperRef])
}