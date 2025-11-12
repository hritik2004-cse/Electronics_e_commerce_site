import React from 'react';
import { categories } from '../../data/categories';
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
} from '../ui/card';

const Categoriesblock = () => {
    return (
        <section className="w-full">
            <div className="w-[90%] h-auto m-auto grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-6 place-items-center">
                {categories.map((items, index) => {
                    const Icon = items.icon;

                    return (
                        <Card
                            key={index}
                            className="h-[135px] md:h-[145px] w-[150px] md:w-[170px] 
                         text-card-foreground group bg-background 
                         hover:bg-primary duration-300 ease-in 
                         cursor-pointer flex flex-col items-center justify-between p-5"
                        >
                            <CardHeader className="p-0 flex justify-center items-center">
                                <CardTitle className="flex justify-center items-center">
                                    <Icon size={56} className="group-hover:text-background" />
                                </CardTitle>
                            </CardHeader>

                            <CardFooter className="p-0 mt-2 flex justify-center items-center">
                                <CardDescription className="capitalize text-foreground text-[1rem] group-hover:text-background text-center">
                                    {items.data}
                                </CardDescription>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

export default Categoriesblock;
