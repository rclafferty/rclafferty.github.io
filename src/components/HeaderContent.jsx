import { Link } from 'react-router-dom';

export default function HeaderContent() {
    return (
        <>
			<div id="header-content">
				<h1>Robert Casey Lafferty</h1>
				<p>I am an experienced video game developer and software engineer with hands-on experience in projects like Call of Duty, casino slot machines, and military weapon systems. Holding both a Bachelor's and Master's degree in Computer Science, I focused my studies on cyber security and video game development.</p>
				<p>&nbsp;</p>
				<p>In addition to my industry background, I have spent eight years as an educator and tutor, with three years as an online tutor, two years as a Graduate Teaching Assistant, and three years as an Undergraduate Teaching Assistant, helping students in the field of computer science and various core subjects. My interests encompass game development, software development, cyber security, artificial intelligence, web development, and more.</p>
				
				<div id="header-links">

					<details className="resume-dropdown">
						<summary className="button">Resume</summary>

						<div className="resume-options">
                    		<Link to={'/resume'}>Online Resume</Link>
							<a href="/documents/Robert_Casey_Lafferty_Game_Dev_Resume.pdf" target="_blank" rel="noopener noreferrer">Game Dev Resume</a>
							<a href="/documents/Robert_Casey_Lafferty_Software_Dev_Resume.pdf" target="_blank" rel="noopener noreferrer">Software Resume</a>
							<a href="/documents/Robert_Casey_Lafferty_Education_Resume.pdf" target="_blank" rel="noopener noreferrer">Education Resume</a>
						</div>
					</details>

					<a className="button" href="https://www.linkedin.com/in/rclafferty" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					<a className="button" href="https://www.github.com/rclafferty" target="_blank" rel="noopener noreferrer">GitHub</a>
					<a className="button" href="https://rclafferty.itch.io" target="_blank" rel="noopener noreferrer">Itch.io</a>
					<a className="button" href="mailto:robert.casey.lafferty@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
				</div>
			</div>

			<hr id="professional" />
        </>
    );
}