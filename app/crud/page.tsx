'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './crud.module.css';
import Dropdowns from './Dropdowns'; // Ensure this path is correct

const Page = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    vendor: '',
    team: '',
    pb: '',
    dc: '',
    pbAmt: '',
    dcAmt: '',
    pickup: { name: '', address: '', phone: '' },
    drop: { name: '', address: '', phone: '' },
    orderType: ''
  });

  const [records, setRecords] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = uuidv4();
    setRecords((prev) => [...prev, { id, ...formData }]);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      vendor: '',
      team: '',
      pb: '',
      dc: '',
      pbAmt: '',
      dcAmt: '',
      pickup: { name: '', address: '', phone: '' },
      drop: { name: '', address: '', phone: '' },
      orderType: ''
    });
  };

  const calculateValues = () => {
    const { pb, dc, pbAmt, dcAmt } = formData;

    const pbAmount = Number(pbAmt) || 0;
    const dcAmount = Number(dcAmt) || 0;

    let tsb = 0;
    let cid = 0;

    if (dc === "Due" && pb === "COD") {
      tsb = pbAmount - dcAmount;
      cid = pbAmount;
    } else if (dc === "Prepaid" && pb === "COD") {
      tsb = pbAmount;
      cid = pbAmount;
    } else if (dc === "COD" && pb === "COD") {
      tsb = pbAmount;
      cid = pbAmount + dcAmount;
    } else if (dc === "Due" && pb === "Prepaid") {
      tsb = pbAmount - dcAmount;
      cid = 0;
    } else if (dc === "Prepaid" && pb === "Prepaid") {
      tsb = 0;
      cid = 0;
    } else if (dc === "COD" && pb === "Prepaid") {
      tsb = 0;
      cid = dcAmount;
    } else if (dc === "Due" && pb === "Due") {
      tsb = -pbAmount - dcAmount;
      cid = 0;
    }

    return { tsb, cid };
  };

  const { tsb, cid } = calculateValues();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Create New Record</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={styles.inputField}
            readOnly
          />
        </div>

        <Dropdowns formData={formData} handleChange={handleChange} />

        <div className={styles.section}>
          <h2 className={styles.heading2}>Pickup Details</h2>
          <div className={styles.formGroup}>
            <label>Name:</label>
            <input
              type="text"
              name="pickupName"
              value={formData.pickup.name}
              onChange={(e) => setFormData((prev) => ({
                ...prev,
                pickup: { ...prev.pickup, name: e.target.value }
              }))}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Address:</label>
            <input
              type="text"
              name="pickupAddress"
              value={formData.pickup.address}
              onChange={(e) => setFormData((prev) => ({
                ...prev,
                pickup: { ...prev.pickup, address: e.target.value }
              }))}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Phone:</label>
            <input
              type="text"
              name="pickupPhone"
              value={formData.pickup.phone}
              onChange={(e) => setFormData((prev) => ({
                ...prev,
                pickup: { ...prev.pickup, phone: e.target.value }
              }))}
              className={styles.inputField}
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading2}>Drop Details</h2>
          <div className={styles.formGroup}>
            <label>Name:</label>
            <input
              type="text"
              name="dropName"
              value={formData.drop.name}
              onChange={(e) => setFormData((prev) => ({
                ...prev,
                drop: { ...prev.drop, name: e.target.value }
              }))}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Address:</label>
            <input
              type="text"
              name="dropAddress"
              value={formData.drop.address}
              onChange={(e) => setFormData((prev) => ({
                ...prev,
                drop: { ...prev.drop, address: e.target.value }
              }))}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Phone:</label>
            <input
              type="text"
              name="dropPhone"
              value={formData.drop.phone}
              onChange={(e) => setFormData((prev) => ({
                ...prev,
                drop: { ...prev.drop, phone: e.target.value }
              }))}
              className={styles.inputField}
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading2}>Order Types</h2>
          <div className={styles.formGroup}>
            <label>Order Type:</label>
            <select name="orderType" value={formData.orderType} onChange={handleChange} className={styles.inputField}>
              <option value="">Select an order type</option>
              <option value="Type1">Type1</option>
              <option value="Type2">Type2</option>
              <option value="Type3">Type3</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>PB Amount:</label>
            <input
              type="number"
              name="pbAmt"
              value={formData.pbAmt}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label>DC Amount:</label>
            <input
              type="number"
              name="dcAmt"
              value={formData.dcAmt}
              onChange={handleChange}
              className={styles.inputField}
            />
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

        <div className={styles.section}>
          <h2 className={styles.heading2}>Auto Bill Adjusted</h2>
          <div className={styles.formGroup}>
            <label>TSB:</label>
            <input
              type="number"
              name="tsb"
              value={tsb}
              className={styles.inputField}
              readOnly
            />
          </div>
          <div className={styles.formGroup}>
          <label>CID:</label>
            <input
              type="number"
              name="cid"
              value={cid}
              className={styles.inputField}
              readOnly
            />
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      <h2 className={styles.heading1}>Records</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Vendor</th>
            <th>Team</th>
            <th>PB</th>
            <th>DC</th>
            <th>PB Amount</th>
            <th>DC Amount</th>
            <th>Pickup Name</th>
            <th>Pickup Address</th>
            <th>Pickup Phone</th>
            <th>Drop Name</th>
            <th>Drop Address</th>
            <th>Drop Phone</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.date}</td>
              <td>{record.vendor}</td>
              <td>{record.team}</td>
              <td>{record.pb}</td>
              <td>{record.dc}</td>
              <td>{record.pbAmt}</td>
              <td>{record.dcAmt}</td>
              <td>{record.pickup.name}</td>
              <td>{record.pickup.address}</td>
              <td>{record.pickup.phone}</td>
              <td>{record.drop.name}</td>
              <td>{record.drop.address}</td>
              <td>{record.drop.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
