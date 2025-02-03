import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState({ boxSize: "Small", boxOwner: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        navigate("/mailboxes");
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Add a New Mailbox</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
                <div className="mb-3">
                    <label htmlFor="boxOwner" className="form-label">
                        Box Owner:
                    </label>
                    <input
                        type="text"
                        id="boxOwner"
                        name="boxOwner"
                        className="form-control"
                        value={formData.boxOwner}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="boxSize" className="form-label">
                        Box Size:
                    </label>
                    <select
                        id="boxSize"
                        name="boxSize"
                        className="form-select"
                        value={formData.boxSize}
                        onChange={handleChange}
                    >
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Add Mailbox
                </button>
            </form>
        </div>
    );
};

export default MailboxForm;
