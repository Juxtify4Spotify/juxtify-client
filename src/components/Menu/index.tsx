import Icon from '../Icon/index.tsx'

function Menu() {
    return (
        <nav className="font-medium flex w-full h-20 p-2">
            <div className="flex text-foreground h-full w-72 p-4 bg-secondary gap-3 items-center rounded-lg">
                <Icon name="discover" filled="yes" color="foreground" />
                <p>Discover</p>
            </div>
        </nav>
    );
}

export default Menu;
