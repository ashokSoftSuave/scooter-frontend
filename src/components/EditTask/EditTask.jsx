import { useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import ArticleMeta from "./ArticleMeta";
import EditThree from "./EditThree";
import EditFour from "./EditFour";
import EditFive from "./EditFive";
import EditSix from "./EditSix";
import EditSeven from "./EditSeven";
import Notes from "./Notes";

const EditTask = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    article_meta: {
      journal: "Journal of Advanced Research",
      pts: "PTS12345",
      pit: "PIT67890",
      dochead: "Document Headline",
      production_handler: "John Doe",
      points: "10",
    },
    notes: {
      pts_remarks: "Initial submission reviewed.",
      production_notes: "Awaiting final proofs.",
    },
    schedule_info: {
      speed_target: "2 weeks",
      on_date: "2025-02-15",
      embargo_exp: "2025-03-01",
      embargo_stg: "Stage 2",
      article_s300_date: "2025-02-20",
      item_holdout: "None",
      item_finalizing: "In Progress",
    },
    article_info: {
      item_group: "Group A",
      volume: "Vol. 12",
      issue: "Issue 4",
      "vol/iss": "12/4",
      handling_editor: "Dr. Jane Smith",
      first_author: "Alice Johnson",
      "corr.author": "Bob Williams",
      "corr.author_email": "mailto:bob.williams@example.com",
      em: "EM123456",
      doi: "10.1234/joar.2025.56789",
      pii: "PII123456789",
      url: "https://www.journalofadvancedresearch.com/articles/joar2025-56789",
      title: "Innovative Approaches in Advanced Research",
      pts_refers_to: "PTS Reference Info",
    },
    miscellanous_info: {
      id_status: true,
      id_notes: "ID verified successfully.",
      welcome_letter: true,
      press_release: false,
      le_figures_ready: true,
      "ce/qc_review_complete": false,
      saved_to_tipsheet_folder: true,
      pts_record_check: true,
      sent_pub_date_to_author: false,
      sent_final_email_to_author: true,
      consortia: "Global Research Consortium",
      fast_track: false,
      free_featured_online: true,
      cover_sub_received: true,
      tdc_order_position: "TDC-7890",
      qa_status: "Pending",
    },
    milestones: {
      copy_edit_task_complete: "2025-01-15T10:00:00Z",
      proofs_to_authoe: "2025-01-20T15:30:00Z",
      au_proof_correx_submitted: "2025-01-25T09:45:00Z",
      revised_proof_requested: true,
      cfc_task_complete: "2025-02-01T12:00:00Z",
      aiti_task_completed: "2025-02-05T14:20:00Z",
      revised_proof_approved: "2025-02-10T11:10:00Z",
    },
    events: {
      received: "2025-01-01T08:00:00Z",
      revised: "2025-01-10T09:30:00Z",
      pre_accept: "2025-01-12T10:00:00Z",
      accepted: "2025-01-15T11:00:00Z",
      login_complete: "2025-01-16T12:00:00Z",
      date_back_from_sce: "2025-01-20T13:00:00Z",
      sce_returned_status: false,
      assigned_date: "2025-01-18T14:00:00Z",
      on_completion: "2025-02-20",
      pts_milestone: "Milestone Achieved",
      ew_imported_s5: "2025-02-01T10:00:00Z",
      sd_published_on_the_web_s5: "2025-02-02T11:00:00Z",
      ew_imported_s200: "2025-02-03T12:00:00Z",
      sd_published_on_the_web_s200: "2025-02-04T13:00:00Z",
      sd_published_on_the_web_s250: "2025-02-05T14:00:00Z",
      sd_published_on_the_eb_s300: "2025-02-06T15:00:00Z",
    },
  });

  return (
    <div className="w-full h-full m-5 flex flex-col gap-5">
      <h1>All Edit Components</h1>
      <ArticleMeta setFormData={setFormData} formData={formData} />
      <Notes setFormData={setFormData} formData={formData} />
      <EditThree />
      <EditFour />
      <EditFive />
      <EditSix />
      <EditSeven />
    </div>
  );
};

export default EditTask;
