type Status = 0 | 1

export interface MenuItem {
  title: string;
  value: string;
  id: number;
}

export interface CardItem {
  id: string;
  name: string;
  title: string;
  createTime: string;
  updateTime: string;
  state: boolean;
  remark: string;
}
