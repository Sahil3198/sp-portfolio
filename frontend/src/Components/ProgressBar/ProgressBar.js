
const ProgressBar = ({ percentage, name }) => {
    return (
        <div class="progress-wrap">
            <div className="progress-bar-content">
                <h3>{name}</h3>
                <h4>{percentage}%</h4>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>

    );
};

export default ProgressBar;