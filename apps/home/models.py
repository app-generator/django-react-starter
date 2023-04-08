from django.db import models

# Create your models here.

class Sales(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.CharField(max_length=100, default='Nike')  # name: Nike AIR, PUMA
    price = models.IntegerField(default=99)  # 99
    fee = models.IntegerField(default=5)  # 5
    currency = models.CharField(max_length=3, default='usd')  # usd, eur, chn
    country = models.CharField(max_length=100, default='usa')  # usa, ch, ro

    def __str__(self):
        return self.product

    class Meta:
        verbose_name = "Sale"
        verbose_name_plural = "Sales"
        