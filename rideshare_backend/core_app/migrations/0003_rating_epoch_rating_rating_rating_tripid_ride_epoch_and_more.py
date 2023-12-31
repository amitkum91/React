# Generated by Django 4.2.3 on 2023-07-24 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_app', '0002_alter_register_password_alter_register_role_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='rating',
            name='epoch',
            field=models.BigIntegerField(default=123),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='rating',
            name='rating',
            field=models.FloatField(default=3),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='rating',
            name='tripId',
            field=models.IntegerField(default=345),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='ride',
            name='epoch',
            field=models.BigIntegerField(default=345),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='ride',
            name='tripId',
            field=models.IntegerField(default=345),
            preserve_default=False,
        ),
    ]
