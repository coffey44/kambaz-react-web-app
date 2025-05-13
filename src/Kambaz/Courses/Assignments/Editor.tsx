export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify...
      </textarea>
      <br />

      <table>
        <tbody>
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
                <option>ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
              </select>
              <br />
              <label htmlFor="wd-text-entry">
                <input type="checkbox" id="wd-text-entry" /> Text Entry
              </label><br />
              <label htmlFor="wd-website-url">
                <input type="checkbox" id="wd-website-url" /> Website URL
              </label><br />
              <label htmlFor="wd-media-recordings">
                <input type="checkbox" id="wd-media-recordings" /> Media Recordings
              </label><br />
              <label htmlFor="wd-student-annotation">
                <input type="checkbox" id="wd-student-annotation" /> Student Annotation
              </label><br />
              <label htmlFor="wd-file-upload">
                <input type="checkbox" id="wd-file-upload" /> File Uploads
              </label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input id="wd-assign-to" value="Everyone" /><br /><br />

              <label htmlFor="wd-due-date">Due</label><br />
              <input type="date" id="wd-due-date" value="2024-05-13" /><br /><br />

              <label htmlFor="wd-available-from">Available from</label>
              <input type="date" id="wd-available-from" value="2024-05-06" />
              <label htmlFor="wd-available-until">Until</label>
              <input type="date" id="wd-available-until" value="2024-05-28" />
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
