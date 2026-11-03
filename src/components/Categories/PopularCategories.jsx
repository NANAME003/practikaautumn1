function  PopularCategories({name, image, path}) {
    return(
        <a
        href={path}
        className="group overflow-hidden 
        rounded-xl
        border border-gray-200
        bg-white"
        >
            <img src={image} 
            alt={name} 
            className="h-44
            w-full
            object-cover"
            />
            <div className="flex items-center 
            justify-between 
            px-4 py-3 
            text-sm
            text-gray-900">
                <span>{name}</span>
                <span className="text-gray-400
                transition-transform
                group-hover:translate-x-1">→</span>
            </div>
        </a>

    );
}

export default PopularCategories;