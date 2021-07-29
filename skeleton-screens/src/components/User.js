import { useEffect, useState } from "react";

const User = () => {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		setTimeout(async () => {
			const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
			const data = await res.json();
			setProfile(data);
		}, 5000);
	}, []);

	return (
		<>
			<div className="users">
				<h2>user Details</h2>
				{profile && (
					<div className="profile">
						<h3>{profile.username}</h3>
						<p>{profile.email}</p>
						<a href={profile.website}>{profile.website}</a>
					</div>
				)}
				{!profile && <div>loading ...</div>}
			</div>
		</>
	);
};
export default User;