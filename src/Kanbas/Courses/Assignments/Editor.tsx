export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">

            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />


            <textarea id="wd-description">
                The assignment is available online. Submit a link to the landing page of
            </textarea>
            <br />


            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">Assignments</option>
                            <option value="QUIZZES">Quizzes</option>
                            <option value="PROJECTS">Projects</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                            <option value="On Paper">On Paper</option>
                            <option value="No Submission">No Submission</option>
                        </select>
                    </td>
                </tr>
            </table>


            <div>
                <label><input type="checkbox" id="wd-text-entry" /> Text Entry</label><br />
                <label><input type="checkbox" id="wd-website-url" /> Website URL</label><br />
                <label><input type="checkbox" id="wd-media-recordings" /> Media Recordings</label><br />
                <label><input type="checkbox" id="wd-student-annotation" /> Student Annotation</label><br />
                <label><input type="checkbox" id="wd-file-upload" /> File Uploads</label>
            </div>


            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-to">Assign to</label>
                    </td>
                    <td>
                        <input id="wd-assignment-to" value="Everyone" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input id="wd-due-date" type="date" value="2024-05-13" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <input id="wd-available-from" type="date" value="2024-05-06" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td>
                        <input id="wd-available-until" type="date" value="2024-05-20" />
                    </td>
                </tr>
            </table>


            <div>
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    );
}
