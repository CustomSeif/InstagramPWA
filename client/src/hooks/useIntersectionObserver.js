import { useEffect, useRef, useState } from "react"

const useIntersectionObserver = (ref, isSingleUse = true) => {
    const isMounted = useRef(true)

    const [intersected, setIntersected] = useState(false)

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                if (isMounted.current) setIntersected(true)
                if (isSingleUse && isMounted.current) observer.unobserve(ref.current)
            }
            else {
                if (isMounted.current) setIntersected(false)
            }
        })

        intersectionObserver.observe(ref.current)

        return () => isMounted.current = false
    }, [ref, isSingleUse])

    return [intersected]
}

export default useIntersectionObserver