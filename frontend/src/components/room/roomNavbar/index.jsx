import './roomnavbar.css';

function RoomNavbar({room={}}) {
    const roomData=Array.isArray(room)?room[0]:room;
    return (
        <div className="room-navbar">
            <div className="navbar-brand">
            <h2>{roomData?.Roomname}</h2>
            </div>

            <div className="navbar-details">
            <div className="navbar-item">
                <span className="navbar-item">
                    <strong>Code:{roomData?.Roomcode}</strong>
                </span>
                <span className="navbar-item">
                    <strong>category:{roomData?.Roomtype}</strong>
                </span>
                <span className="navbar-item">
                    <strong>maxcapacity:{roomData?.maxparticipants}</strong>
                </span>
                </div>            
            </div>

        </div>

        
    );

}

export default RoomNavbar;