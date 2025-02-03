import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    if (!selectedBox) {
        return (
            <div className="container mt-4 text-center">
                <h2 className="text-danger">Mailbox Not Found!</h2>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                    <h2 className="mb-0">Mailbox Details</h2>
                </div>
                <div className="card-body">
                    <p className="card-text"><strong>Box Number:</strong> {selectedBox._id}</p>
                    <p className="card-text"><strong>Box Owner:</strong> {selectedBox.boxOwner}</p>
                    <p className="card-text"><strong>Box Size:</strong> {selectedBox.boxSize}</p>
                </div>
            </div>
        </div>
    );
};

export default MailboxDetails;
