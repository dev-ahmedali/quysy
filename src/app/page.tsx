import SigninButton from "@/components/SigninButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  return (
    <div className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>
            Welcome to Quysy!
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              veniam expedita quaerat quibusdam facere libero?
            </CardDescription>
        </CardHeader>
        <CardContent>
          <SigninButton text="Sign In with Google"/>
        </CardContent>
      </Card>
    </div>
  );
}
