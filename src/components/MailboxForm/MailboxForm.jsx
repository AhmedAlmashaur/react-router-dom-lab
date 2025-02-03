import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="boxOwner">Box Owner:</label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="boxSize">Box Size:</label>
                <select
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <button type="submit">Add Mailbox</button>
        </form>
    );
};

export default MailboxForm;
