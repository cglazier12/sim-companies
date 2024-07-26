const LeftColumn: React.FC = () => {

    return (
        <aside className="sticky top-8 hidden w-44 shrink-0 lg:block bg-gray-100 p-4">
            <nav>
                <ul>
                <li className="mb-2">
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md">
                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18M3 18h18"></path></svg>
                    <span className="ml-3">Dashboard</span>
                    </a>
                </li>
                {/* Add more menu items here */}
                </ul>
            </nav>
        </aside>

    )
}
export default LeftColumn