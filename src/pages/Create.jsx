import React, { useState } from 'react';
import supabase from '../supabase'; // Make sure you have Supabase client imported

const Create = () => {
    // State to hold form input values
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !speed || !color) {
            setError("Please fill out all fields");
            return;
        }

        try {
            const { data, error } = await supabase
                .from("amogus") // Replace "amogus" with your table name in Supabase
                .insert([
                    { name, speed: parseFloat(speed), color }
                ]);

            if (error) {
                setError("Failed to create character");
                console.error(error);
            } else {
                setSuccess("Character created successfully!");
                setError(null);
                // Clear form inputs after successful submission
                setName('');
                setSpeed('');
                setColor('');
            }
        } catch (err) {
            setError("An unexpected error occurred");
            console.error(err);
        }
    };

    return (
        <div className="create-container">
            <h1>Create a New Crewmate</h1>
            
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="input-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter crewmate's name"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="speed">Speed (mph):</label>
                        <input
                            type="number"
                            id="speed"
                            value={speed}
                            onChange={(e) => setSpeed(e.target.value)}
                            placeholder="Enter speed in mph"
                        />
                    </div>

                    <div className="input-group">
                        <label>Color:</label>
                        <div className="color-options">
                            {["Red", "Green", "Blue", "Purple", "Yellow", "Orange", "Pink", "Rainbow"].map((colorOption) => (
                                <label key={colorOption}>
                                    <input
                                        type="radio"
                                        name="color"
                                        value={colorOption}
                                        checked={color === colorOption}
                                        onChange={() => setColor(colorOption)}
                                    />{" "}
                                    {colorOption}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <button type="submit" className="create-button">Create Crewmate</button>
            </form>
        </div>
    );
};

export default Create;