
import { Button } from '../ui/button';
import { FaArrowRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Offer = () => {
    return (
        <div className='bg-background relative p-4 border-b border-border'>
            <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto">
                <p className="text-center flex-1">
                    Winter Sale is live, get upto 60-70% off on branded items!
                </p>
                <Button className="flex items-center gap-2">
                    shop now <FaArrowRight />
                </Button>
                <FaXmark 
                    className="text-xl cursor-pointer hover:text-destructive transition-colors absolute right-4 top-4"
                    title="Dismiss for 30 minutes"
                />
            </div>
        </div>
    )
}

export default Offer
