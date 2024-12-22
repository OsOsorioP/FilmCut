import { Search } from "lucide-react";
import React from 'react';
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SearchMovies() {

    return (
        <aside>
            <h2 className="mt-5 mb-5 text-[#FFFFFF] font-[700] text-[16px] leading-[22px]">Search</h2>
            <div className="w-full">
                <form className="relative">
                    <Input
                        className="w-full bg-[#1C1C1C] border-0 text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Keywords"
                        type="search"
                    />
                    <Button
                        size="icon"
                        type="submit"
                        variant="ghost"
                        className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-[#1C1C1C]"
                    >
                        <Search className="h-4 w-4" />
                        <span className="sr-only">Search</span>
                    </Button>
                </form>
            </div>
        </aside>
    );
}
