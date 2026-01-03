# Campus Inventory IMS - Complete Setup Guide

## 🎯 Project Status: PHASE 3 COMPLETE

✅ **Phase 1**: Google Sheets Database - DONE
✅ **Phase 2**: Apps Script Backend - CODE READY
✅ **Phase 3**: Frontend (GitHub Pages) - LIVE
⏳ **Phase 4**: ESP32-CAM Firmware - CODE PROVIDED
⏳ **Phase 5-9**: Extensions - READY FOR IMPLEMENTATION

## 📋 What You Have

### 1. **Google Sheets Database**
File: `Campus_Inventory_IMS`

Sheets included:
- `Inventory_Master` - Component master records
- `Locations` - Physical shelf locations (QR-mapped)
- `Transaction_Logs` - Append-only transaction ledger
- `Devices` - Scanner device registry
- `Kits` - Kit definitions
- `Kit_Components` - Kit composition
- `Audit_Logs` - Audit snapshots
- `Config` - System configuration
- `Users` - User roles (for future auth)

### 2. **GitHub Repository**
URL: https://github.com/yeshwanthkumardomala/Campus-Inventory-IMS

Files deployed:
- `index.html` - Home dashboard with live system status
- `config.js` - API configuration (NEEDS YOUR APPS SCRIPT URL)

### 3. **GitHub Pages (LIVE)**
URL: https://yeshwanthkumardomala.github.io/Campus-Inventory-IMS/

Dashboard shows:
- System health status
- Quick links to QR scan, inventory, kits, audits
- Real-time backend connectivity check

## 🚀 NEXT STEPS (Critical - Do These Now)

### Step 1: Complete Apps Script Deployment

1. Open your Google Sheet: `Campus_Inventory_IMS`
2. Go to **Extensions → Apps Script**
3. Paste the complete `Code.gs` from `BACKEND_CODE.gs` (provided separately)
4. Click **Deploy → New deployment**
5. Select **Type: Web app**
6. Set **Execute as: Me (yeshwanthkumardomala@gmail.com)**
7. Set **Who has access: Anyone**
8. Click **Deploy**
9. Copy the deployment URL (looks like: `https://script.google.com/macros/s/...`)

### Step 2: Update API Configuration

1. Go to GitHub: https://github.com/yeshwanthkumardomala/Campus-Inventory-IMS
2. Open `config.js`
3. Edit the file and replace `YOUR_DEPLOYMENT_ID` with your Apps Script deployment ID
4. Commit the change
5. GitHub Pages will auto-update in ~30 seconds

### Step 3: Test the System

1. Visit: https://yeshwanthkumardomala.github.io/Campus-Inventory-IMS/
2. Check System Status - should show all ✓ OK
3. Click "QR Scan" button
4. Test with sample location & component QRs (provided in docs)

## 🔧 Backend Code

The complete `Code.gs` file includes:

**GET Endpoints:**
- `/inventory` - Get all inventory items
- `/locations` - Get all location definitions
- `/devices` - Get registered scanners
- `/system-status` - Health check
- `/kits` - List kits (stub)
- `/stats` - Usage statistics (stub)
- `/qr` - Generate QR code strings (stub)

**POST Endpoints:**
- `/scan` - Primary scanning endpoint (dual QR: location + component)
  - PREVIEW mode: validates and shows preview
  - CONFIRM mode: commits transaction
- `/scan-undo` - Undo last transaction (30-sec window)
- `/kit/issue` - Issue a kit bundle (stub)
- `/kit/return` - Return a kit (stub)
- `/audit` - Record audit snapshot (stub)

**Core Features:**
- Append-only Transaction_Logs
- Real-time stock calculation from logs
- Dual QR validation (location + component)
- Scan cooldown per device
- PREVIEW → CONFIRM workflow
- Undo with 30-second reversal window
- No negative stock enforcement

## 📱 QR Code Format

**LOCATION QR** (one per physical box):
```
TYPE=LOC|LAB=ROBOLAB|SHELF=S1|COL=C2|BOX=B3
```

**COMPONENT QR** (one per item type):
```
TYPE=COMP|ITEM=RES_10K|CAT=PASSIVE
```

## 🔌 Hardware Integration (Later)

### ESP32-CAM Firmware
Provided separately: `ESP32_Firmware.ino`
- QR code scanning
- IN / OUT / DAMAGED buttons
- OLED display feedback
- Offline queue with retry logic
- HTTP POST to Apps Script API

### Mobile Scanner
- Use html5-qrcode library (already in frontend)
- Works on any smartphone browser

## 📊 Database Sample Data

A sample location has been created:
- **LOCATION_ID**: ROBOLAB_S1_C2_B3
- **QR_STRING**: `TYPE=LOC|LAB=ROBOLAB|SHELF=S1|COL=C2|BOX=B3`

You can now scan this location with your QR scanner to test.

## 🔐 Security Notes

- Currently deployed as public (anyone with link can access)
- Apps Script executes as your account
- Consider adding Google Sign-In for production (Phase 8)
- Use `DEMO_MODE` config for read-only access
- All transactions are logged (audit trail)

## 📈 Future Phases

**Phase 4**: ESP32-CAM Integration
- Flash firmware to ESP32 board
- Test QR scanning

**Phase 5**: Kit Management
- Define kit composition
- Issue/Return workflows

**Phase 6**: Audits & Analytics
- Monthly lab audits
- Usage statistics
- Comparison reports

**Phase 7**: System Status Dashboard
- Backend health
- Device connectivity
- Database status

**Phase 8**: Authentication
- Google Sign-In
- Role-based access

**Phase 9**: Enhancements
- Mobile app wrapper
- Barcode support
- Multi-lab support

## 🆘 Troubleshooting

**Q: Backend shows offline?**
A: Check that Apps Script API URL is correctly set in `config.js`

**Q: Scan not working?**
A: Ensure location QR exists in Locations sheet and matches QR string exactly

**Q: Stock showing 0?**
A: Transaction_Logs might be empty. Do an IN scan to add inventory.

## 📞 Support

For issues or questions:
1. Check the GitHub Issues
2. Review SETUP_GUIDE.md
3. Check Google Sheets for data consistency
4. Verify Apps Script API deployment status

---

**Version**: 1.0.0
**Last Updated**: January 2026
**Status**: Production-Ready (Core Features)

**Next Action**: Paste `Code.gs` into Apps Script and deploy! 🚀
