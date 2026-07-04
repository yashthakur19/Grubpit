import './RoomHistory.css';
function RoomHistory() {
    return (
        <div className="room-history">
            <h1 style={{ color: '#000000' }}>Recent Rooms</h1>
            <div className="rooms">
               <h2>React Projects</h2> 
                4 members
            </div>

            <div className="rooms">
               <h2>Leetcode Practice</h2>
                2 members
            </div>

           <div className="rooms">
           <h2>MERN Stack Development</h2>
           5 members
           </div>


        </div>
    );
}

export default RoomHistory;