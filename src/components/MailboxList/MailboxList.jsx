import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const MailboxList = ({ mailboxes }) => {
    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Mailboxes</h2>
            <div className="row g-3">
                {mailboxes.map((mailbox) => (
                    <div className="col-md-3 col-sm-6" key={mailbox._id}>
                        <Link
                            to={`/mailboxes/${mailbox._id}`}
                            className="btn btn-outline-primary w-100 text-center p-3"
                            style={{ borderRadius: '8px' }}
                        >
                            Box {mailbox._id}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MailboxList;
