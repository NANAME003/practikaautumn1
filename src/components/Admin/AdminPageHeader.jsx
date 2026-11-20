function AdminPageHeader ({label,title,children}) {
    return (
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">{label}</p>
                <h1 className="mt-1 text-2xl font-semibold text-gray-900 sm:text-3xl">{title}</h1>
            </div>
            {children}
        </div>
    );
}

export default AdminPageHeader;