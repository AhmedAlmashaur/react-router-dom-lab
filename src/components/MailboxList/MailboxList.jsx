import { Link } from "react-router-dom";
import "./MailboxList.css"; // Add your CSS styles

const MailboxList = ({ mailboxes }) => {
    return (
        <div>
            <h2>Mailboxes</h2>
            <div className="mailboxes-container">
                {mailboxes.map((mailbox) => (
                    <Link
                        to={`/mailboxes/${mailbox._id}`}
                        key={mailbox._id}
                        className="mail-box"
                    >
                        Box {mailbox._id}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MailboxList;
