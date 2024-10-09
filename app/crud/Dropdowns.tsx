// crud/Dropdowns.tsx
import React from 'react';
import styles from './crud.module.css'; // Make sure this path is correct

interface FormData {
  vendor: string;
  team: string;
  pb: string;
  dc: string;
  pbAmt: string;
  dcAmt: string;
}

interface DropdownsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdowns: React.FC<DropdownsProps> = ({ formData, handleChange }) => {
  return (
    <div>
      <div className={styles.formGroup}>
        <label>Vendor:</label>
        <select name="vendor" value={formData.vendor} onChange={handleChange} className={styles.inputField}>
          <option value="">Select a vendor</option>
          <option value="Sangeeta">Sangeeta</option>
          <option value="Rani">Rani</option>
          <option value="Ima Watch">Ima Watch</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Team:</label>
        <select name="team" value={formData.team} onChange={handleChange} className={styles.inputField}>
          <option value="">Select a team</option>
          <option value="Ricky">Ricky</option>
          <option value="Bonison">Bonison</option>
          <option value="Mani">Mani</option>
        </select>
      </div>

      
      <div className={styles.formGroup}>
        <label>PB:</label>
        <select name="pb" value={formData.pb} onChange={handleChange} className={styles.inputField}>
          <option value="">Select PB</option>
          <option value="Due">Due</option>
          <option value="Prepaid">Prepaid</option>
          <option value="COD">COD</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>DC:</label>
        <select name="dc" value={formData.dc} onChange={handleChange} className={styles.inputField}>
          <option value="">Select DC</option>
          <option value="Due">Due</option>
          <option value="Prepaid">Prepaid</option>
          <option value="COD">COD</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdowns;
