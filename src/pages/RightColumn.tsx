
const RightColumn: React.FC = () => {

    return (
        <aside className="sticky top-8 hidden w-96 shrink-0 xl:block bg-gray-100 p-4">
            <div className="bg-white shadow-sm rounded-lg p-4">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <ul>
                <li className="py-2 border-b">Notification 1</li>
                <li className="py-2 border-b">Notification 2</li>
                </ul>
            </div>
        </aside>
    )
}
export default RightColumn