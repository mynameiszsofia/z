import React from 'react';
import logo40 from '../assets/images/lzs.png';
/* import logo24 from './../images/logo24.jpg'; */
import "../assets/sass/avatar.scss";

const Avatar = (props) => (
    <div className="avatar-x">
        <img className="avatar"
            src={(props.modifierClasses === 'c-avatar--as-author') ? logo40 : logo40}
            alt="avatar"
        />
    </div>
)

export default Avatar;