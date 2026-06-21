# PERFORMANCE.md — Заміри продуктивності

> Формат: гіпотеза → замір до → зміна → замір після → висновок.
> Мета — оптимізація як експеримент з цифрами, а не віра.

---

## 001 — eventsPerDay без індексу

**Запит:** `SELECT DATE(occurred_at), COUNT(*) FROM events GROUP BY DATE(occurred_at)`  
**План:** Seq Scan  
**Час:** 20ms  
**Дані:** 50 000 подій  
**Статус:** baseline — до оптимізації
