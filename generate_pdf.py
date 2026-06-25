# -*- coding: utf-8 -*-
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

# 1. Dataset structured by Category and Slot Pairs
SLOT_PAIRS = [
    # ================= THEORY SLOTS =================
    {
        "category": "DC - Discipline Core",
        "morning_slot": "A1+TA1",
        "morning_code": "ISWE407L",
        "morning_name": "User Interface and UX Design",
        "morning_faculties": ["JEEVITHA P", "KALAIVANI S", "RAJESWARI C", "SANTHOSH KUMAR S V N", "CHARANYA R"],
        "afternoon_slot": "A2+TA2",
        "afternoon_code": "ISWE407L",
        "afternoon_name": "User Interface and UX Design",
        "afternoon_faculties": ["CHARANYA R", "RAJESWARI C", "JEEVITHA P", "KALAIVANI S", "SANTHOSH KUMAR S V N"]
    },
    {
        "category": "DC - Discipline Core",
        "morning_slot": "B1+TB1",
        "morning_code": "ISWE402L",
        "morning_name": "Software Metrics",
        "morning_faculties": ["JEEVITHA P", "NIVETHITHA K", "SENTHIL KUMARAN U", "KARPAGAM S", "RAMALINGAM M"],
        "afternoon_slot": "B2+TB2",
        "afternoon_code": "ISWE402L",
        "afternoon_name": "Software Metrics",
        "afternoon_faculties": ["KRITHIKA L.B", "CHEMMALAR SELVI G", "SUMATHI D", "NEELU KHARE", "RAHAMATHUNNISA U"]
    },
    {
        "category": "DE - Discipline Elective",
        "morning_slot": "B1+TB1",
        "morning_code": "ISWE412L",
        "morning_name": "Block Chain Technologies",
        "morning_faculties": ["VIJAY ANAND R", "SUGANYA A"],
        "afternoon_slot": "B2+TB2",
        "afternoon_code": "ISWE412L",
        "afternoon_name": "Block Chain Technologies",
        "afternoon_faculties": ["VIJAY ANAND R", "PRIYA PONNUSWAMY P"]
    },
    {
        "category": "DE - Discipline Elective",
        "morning_slot": "B1+TB1",
        "morning_code": "ISWE416L",
        "morning_name": "Big Data Analytics",
        "morning_faculties": ["RAJESH P", "CHANDRA MOULISWARAN S"],
        "afternoon_slot": "B2+TB2",
        "afternoon_code": "ISWE416L",
        "afternoon_name": "Big Data Analytics",
        "afternoon_faculties": ["SENTHIL KUMAR. M", "CHANDRA MOULISWARAN S"]
    },
    {
        "category": "DC - Discipline Core",
        "morning_slot": "C1+TC1",
        "morning_code": "ISWE404L",
        "morning_name": "Design Patterns",
        "morning_faculties": ["SENTHIL KUMAR. M", "JERART JULUS L", "MUTHAMIL SELVAN T", "MOHANRAJ G", "SENTHIL KUMARAN U"],
        "afternoon_slot": "C2+TC2",
        "afternoon_code": "ISWE404L",
        "afternoon_name": "Design Patterns",
        "afternoon_faculties": ["KANCHAN KEISHAM", "BALA GANESH N", "SENTHIL KUMARAN U", "SENTHIL KUMAR. M", "CHANDRASEGAR.T"]
    },
    {
        "category": "DE - Discipline Elective",
        "morning_slot": "D1",
        "morning_code": "ISWE410L",
        "morning_name": "Machine Learning",
        "morning_faculties": ["USHAPREETHI P", "PORKODI S"],
        "afternoon_slot": "D2",
        "afternoon_code": "ISWE410L",
        "afternoon_name": "Machine Learning",
        "afternoon_faculties": ["PORKODI S", "SRINIVASAN P", "USHAPREETHI P"]
    },
    {
        "category": "DE - Discipline Elective",
        "morning_slot": "D1+TD1",
        "morning_code": "ISWE415L",
        "morning_name": "Cyber Security",
        "morning_faculties": ["JEYANTHI N", "MALATHY E", "PRABHU J"],
        "afternoon_slot": "D2+TD2",
        "afternoon_code": "ISWE415L",
        "afternoon_name": "Cyber Security",
        "afternoon_faculties": ["NADESH R.K", "MANGAYARKARASI R"]
    },
    {
        "category": "DE - Discipline Elective",
        "morning_slot": "E1+TE1",
        "morning_code": "ISWE310L",
        "morning_name": "Natural Language Processing",
        "morning_faculties": ["SUBA SHANTHINI S", "SIVARANJINI N"],
        "afternoon_slot": "E2+TE2",
        "afternoon_code": "ISWE310L",
        "afternoon_name": "Natural Language Processing",
        "afternoon_faculties": ["AASEEGHA M D", "SUGANYA D", "SUREKA S"]
    },
    {
        "category": "DE - Discipline Elective",
        "morning_slot": "F1+TF1",
        "morning_code": "ISWE411L",
        "morning_name": "Deep Learning",
        "morning_faculties": ["GANESAN K", "BHARANI DHARAN N", "NEELU KHARE"],
        "afternoon_slot": "F2+TF2",
        "afternoon_code": "ISWE411L",
        "afternoon_name": "Deep Learning",
        "afternoon_faculties": ["NEELU KHARE", "SRIVATHSAVA M"]
    },
    {
        "category": "DE - Discipline Elective",
        "morning_slot": "G1+TG1",
        "morning_code": "ISWE311L",
        "morning_name": "Software Industrialization & Economics",
        "morning_faculties": ["VIJAY ANAND R", "SRINIVASAN P"],
        "afternoon_slot": "G2+TG2",
        "afternoon_code": "ISWE311L",
        "afternoon_name": "Software Industrialization & Economics",
        "afternoon_faculties": ["SENTHIL KUMAR P", "BALAJI E", "SRINIVASAN P"]
    },
    {
        "category": "OE - Open Elective",
        "morning_slot": "G1+TG1",
        "morning_code": "ISTS301P",
        "morning_name": "Advanced Competitive Coding - I",
        "morning_faculties": ["FACE (APT)", "ETHNUS (APT)"],
        "afternoon_slot": "G2+TG2",
        "afternoon_code": "ISTS301P",
        "afternoon_name": "Advanced Competitive Coding - I",
        "afternoon_faculties": ["FACE (APT)", "ETHNUS (APT)"]
    },
    
    # ================= LAB SLOTS =================
    {
        "category": "DC - Discipline Core",
        "morning_slot": "L11+L12",
        "morning_code": "ISWE407P",
        "morning_name": "UI/UX Design Lab",
        "morning_faculties": ["CHARANYA R"],
        "afternoon_slot": "L37+L38",
        "afternoon_code": "ISWE407P",
        "afternoon_name": "UI/UX Design Lab",
        "afternoon_faculties": ["CHARANYA R"]
    },
    {
        "category": "DC - Discipline Core",
        "morning_slot": "L15+L16",
        "morning_code": "ISWE407P",
        "morning_name": "UI/UX Design Lab",
        "morning_faculties": ["JEEVITHA P"],
        "afternoon_slot": "L55+L56",
        "afternoon_code": "ISWE407P",
        "afternoon_name": "UI/UX Design Lab",
        "afternoon_faculties": ["JEEVITHA P"]
    },
    {
        "category": "DC - Discipline Core",
        "morning_slot": "L21+L22",
        "morning_code": "ISWE407P",
        "morning_name": "UI/UX Design Lab",
        "morning_faculties": ["KALAIVANI S"],
        "afternoon_slot": "L39+L40",
        "afternoon_code": "ISWE407P",
        "afternoon_name": "UI/UX Design Lab",
        "afternoon_faculties": ["KALAIVANI S"]
    },
    {
        "category": "DC - Discipline Core",
        "morning_slot": "L23+L24",
        "morning_code": "ISWE407P",
        "morning_name": "UI/UX Design Lab",
        "morning_faculties": ["RAJESWARI C"],
        "afternoon_slot": "L49+L50",
        "afternoon_code": "ISWE407P",
        "afternoon_name": "UI/UX Design Lab",
        "afternoon_faculties": ["RAJESWARI C"]
    },
    {
        "category": "DC - Discipline Core",
        "morning_slot": "L29+L30",
        "morning_code": "ISWE407P",
        "morning_name": "UI/UX Design Lab",
        "morning_faculties": ["SANTHOSH KUMAR S V N"],
        "afternoon_slot": "L47+L48",
        "afternoon_code": "ISWE407P",
        "afternoon_name": "UI/UX Design Lab",
        "afternoon_faculties": ["SANTHOSH KUMAR S V N"]
    },
    {
        "category": "DE - Discipline Elective",
        "morning_slot": "L5+L6",
        "morning_code": "ISWE410P",
        "morning_name": "Machine Learning Lab",
        "morning_faculties": ["USHAPREETHI P"],
        "afternoon_slot": "L53+L54",
        "afternoon_code": "ISWE410P",
        "afternoon_name": "Machine Learning Lab",
        "afternoon_faculties": ["USHAPREETHI P"]
    },
    {
        "category": "DE - Discipline Elective",
        "morning_slot": "L9+L10",
        "morning_code": "ISWE410P",
        "morning_name": "Machine Learning Lab",
        "morning_faculties": ["PORKODI S"],
        "afternoon_slot": "L51+L52",
        "afternoon_code": "ISWE410P",
        "afternoon_name": "Machine Learning Lab",
        "afternoon_faculties": ["PORKODI S"]
    },
    {
        "category": "DE - Discipline Elective",
        "morning_slot": "L27+L28",
        "morning_code": "ISWE410P",
        "morning_name": "Machine Learning Lab",
        "morning_faculties": ["SRINIVASAN P"],
        "afternoon_slot": "None",
        "afternoon_code": "None",
        "afternoon_name": "None",
        "afternoon_faculties": []
    }
]

# 2. Canvas Template for Dynamic Headers and Footers
class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_decorations(self, page_count):
        self.saveState()
        
        # Don't draw headers/footers on the cover page (Page 1)
        if self._pageNumber > 1:
            self.setFont("Helvetica-Bold", 8)
            self.setFillColor(colors.HexColor("#1e293b"))
            self.drawString(54, 750, "COLLEGE SUBJECT CATALOG")
            
            self.setFont("Helvetica", 8)
            self.setFillColor(colors.HexColor("#64748b"))
            self.drawRightString(558, 750, "Fall Semester 2026-27 | Side-by-Side Slot Matrix")
            
            # Header line
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(54, 742, 558, 742)
            
            # Footer line
            self.line(54, 52, 558, 52)
            self.drawString(54, 40, "Confidential - Student Planning Reference Document")
            
            page_text = f"Page {self._pageNumber} of {page_count}"
            self.drawRightString(558, 40, page_text)
            
        self.restoreState()

# 3. PDF Generation Logic
def generate_pdf(filename="college_course_catalog.pdf"):
    # Target page setup: Letter size, 0.75 in (54 pt) side margins, 1 in (72 pt) top/bottom margins
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=72,
        bottomMargin=72
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette Colors
    primary_color = colors.HexColor("#1e293b")  # Slate 800
    accent_color = colors.HexColor("#4f46e5")   # Indigo 600
    text_color = colors.HexColor("#334155")     # Slate 700
    light_bg = colors.HexColor("#f8fafc")       # Slate 50
    border_color = colors.HexColor("#e2e8f0")   # Slate 200

    # Custom typography styles
    title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=28,
        textColor=primary_color,
        alignment=1,
        spaceAfter=8
    )
    
    subtitle_style = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor("#475569"),
        alignment=1,
        spaceAfter=25
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=19,
        textColor=accent_color,
        spaceBefore=12,
        spaceAfter=8,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=text_color
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.white
    )

    cat_cell_style = ParagraphStyle(
        'CatCell',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=primary_color
    )

    cell_title_style = ParagraphStyle(
        'CellTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=primary_color
    )

    cell_body_style = ParagraphStyle(
        'CellBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=9.5,
        textColor=text_color
    )

    story = []

    # ================= PAGE 1: COVER PAGE =================
    story.append(Spacer(1, 100))
    # Elegant Top Accent Bar
    accent_bar = Table([[""]], colWidths=[504], rowHeights=[6])
    accent_bar.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), accent_color),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(accent_bar)
    story.append(Spacer(1, 20))
    
    story.append(Paragraph("COLLEGE SUBJECT CATALOG", title_style))
    story.append(Paragraph("Fall Semester 2026-27 | Side-by-Side Category & Slot Matrix", subtitle_style))
    story.append(Spacer(1, 40))

    # Summary Metadata Box
    metadata_data = [
        [Paragraph("<b>Academic Session:</b>", body_style), Paragraph("Fall Semester 2026-27", body_style)],
        [Paragraph("<b>Structure:</b>", body_style), Paragraph("Side-by-Side Morning / Afternoon Session Comparison", body_style)],
        [Paragraph("<b>Total Subjects:</b>", body_style), Paragraph("13 Distinct Course Codes (Theory & Lab Components)", body_style)],
        [Paragraph("<b>Co-occurrence Mapping:</b>", body_style), Paragraph("Multiple subjects in the same slot are listed in consecutive rows immediately", body_style)],
        [Paragraph("<b>Scope:</b>", body_style), Paragraph("Unified Curriculum Category & Slot Master Directory", body_style)]
    ]
    metadata_table = Table(metadata_data, colWidths=[150, 354])
    metadata_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), light_bg),
        ('BOX', (0,0), (-1,-1), 1, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('PADDING', (0,0), (-1,-1), 8),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(metadata_table)
    story.append(Spacer(1, 80))
    
    notice_text = (
        "<i>Note: This document provides a structural side-by-side layout of all offered courses, "
        "enabling you to easily compare Morning vs. Afternoon sessions within each curriculum category. "
        "If multiple subjects share the same time slot, they are listed in consecutive rows immediately, "
        "making scheduling clashes obvious and helping you make informed registration decisions.</i>"
    )
    story.append(Paragraph(notice_text, body_style))
    story.append(PageBreak())

    # ================= PAGE 2: MASTER DIRECTORY TABLE =================
    story.append(Paragraph("Side-by-Side Category & Slot Directory", h1_style))
    story.append(Paragraph(
        "This master table aligns Morning and Afternoon slots side-by-side, categorized by curriculum "
        "type (Discipline Core, Discipline Elective, Open Elective). When multiple subjects share the same "
        "slot (e.g. Slot B1/B2, D1/D2), they are shown in consecutive rows immediately below each other.",
        body_style
    ))
    story.append(Spacer(1, 10))

    # Build Master Table
    # Columns: Category (75), Morning Session (214.5), Afternoon Session (214.5)
    table_data = [[
        Paragraph("Category", table_header_style),
        Paragraph("Morning Session (Slot, Subject, Faculty)", table_header_style),
        Paragraph("Afternoon Session (Slot, Subject, Faculty)", table_header_style)
    ]]

    for pair in SLOT_PAIRS:
        # 1. Category Column
        cat_cell = Paragraph(pair["category"].replace(" - ", "<br/>"), cat_cell_style)
        
        # 2. Morning Column Content
        m_cell_content = []
        if pair["morning_slot"] != "None":
            m_cell_content.append(Paragraph(f"<font color='#d97706'><b>Slot: {pair['morning_slot']}</b></font>", cell_title_style))
            m_cell_content.append(Paragraph(f"<b>{pair['morning_code']}</b> — {pair['morning_name']}", cell_title_style))
            fac_list = ", ".join(pair["morning_faculties"])
            m_cell_content.append(Paragraph(f"<i>Faculty: {fac_list}</i>", cell_body_style))
        else:
            m_cell_content.append(Paragraph("<font color='#64748b'><i>No Morning Option</i></font>", cell_body_style))
            
        # 3. Afternoon Column Content
        a_cell_content = []
        if pair["afternoon_slot"] != "None":
            a_cell_content.append(Paragraph(f"<font color='#4f46e5'><b>Slot: {pair['afternoon_slot']}</b></font>", cell_title_style))
            a_cell_content.append(Paragraph(f"<b>{pair['afternoon_code']}</b> — {pair['afternoon_name']}", cell_title_style))
            fac_list = ", ".join(pair["afternoon_faculties"])
            a_cell_content.append(Paragraph(f"<i>Faculty: {fac_list}</i>", cell_body_style))
        else:
            a_cell_content.append(Paragraph("<font color='#64748b'><i>No Afternoon Option</i></font>", cell_body_style))

        table_data.append([
            cat_cell,
            m_cell_content,
            a_cell_content
        ])

    master_table = Table(table_data, colWidths=[75, 214.5, 214.5])
    master_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, border_color),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, light_bg])
    ]))

    story.append(master_table)

    # Build PDF
    doc.build(story, canvasmaker=NumberedCanvas)

if __name__ == "__main__":
    generate_pdf()
    print("PDF catalog generated successfully as 'college_course_catalog.pdf'.")
